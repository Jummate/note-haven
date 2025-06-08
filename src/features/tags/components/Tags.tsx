// import React from 'react';
import { useNavigate } from 'react-router-dom';

import clsx from 'clsx';

import { AppIcons } from '../../../shared/icons/Icons';
import { useHeaderStore } from '../../notes/stores/headerStore';
import { TagsProps, TagType } from '../types';
import { useNoteStore } from '../../notes/stores/noteStore';
import NoContent from '../../../shared/components/NoContent';
import { TAGS_URL } from '../../notes/constants/urls';
import { useTabStore } from '../../notes/stores/tabStore';
import { HorizontalWrapper, Input } from '../../../shared/components';
import { ChangeEvent, useState } from 'react';
// import { FooterTabKey } from "../../../layout/constants/tabs";
// import { SettingsTabKey } from "../../settings/constants/tabs";

function Tags({ styles, divider, titleStyles, listItemStyles }: TagsProps) {
  const navigate = useNavigate();
  const { setHeaderText } = useHeaderStore();
  const { activeTabs, setActiveTab } = useTabStore();
  const tags = useNoteStore(state => state.tagMap);
  const [searchedData, setSearchedData] = useState<typeof tags>(new Map());
  const [query, setQuery] = useState<string>('');
  const TagIcon = AppIcons.tags;
  const ChevRonRight = AppIcons.chevronRight;

  function handleClick({
    path,
    headerText,
    footerActiveTab,
    settingActiveTab,
    sidebarActiveTab,
  }: {
    path: string;
    headerText: string;
    footerActiveTab: string;
    settingActiveTab: string;
    sidebarActiveTab: string;
  }) {
    setActiveTab('footer', footerActiveTab);
    setActiveTab('settings', settingActiveTab);
    setActiveTab('sidebar', sidebarActiveTab);
    setHeaderText(headerText);
    navigate(path);
  }

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;
    setQuery(input);
    if (!input) {
      setSearchedData(tags);
    } else {
      const data = Array.from(tags).filter(([_, value]) =>
        value.name.toLowerCase().includes(input.toLowerCase()),
      );

      setSearchedData(data.length > 0 ? new Map(data) : new Map());
    }
  }

  // if (!tags || tags.size == 0) {
  //   return <NoContent text="No tags found" styles="pt-5" />;
  //   // return <p className="text-secondary-500 italic">No tags found</p>;
  // }
  // const dividerStyles =
  //   divider == "vertical"
  //     ? "divide-y divide-secondary-200"
  //     : divider == "horizontal"
  //     ? "divide-x divide-secondary-200"
  //     : "";
  const dividerStyles = clsx({
    'divide-y divide-secondary-200': divider === 'vertical',
    'divide-x divide-secondary-200': divider === 'horizontal',
  });

  return (
    <section className={clsx('flex flex-col', styles)}>
      <h2 className={clsx('mb-5', titleStyles)}>Tags</h2>

      {!tags || tags.size == 0 ? (
        <NoContent text="No tags found" styles="pt-5" />
      ) : (
        <>
          <Input
            type="search"
            placeholder="Search tags"
            value={query}
            onChange={handleSearch}
          />

          {query && searchedData?.size == 0 && (
            <HorizontalWrapper styles="mt-3 gap-3">
              <span className="italic">No results found for </span>
              <span className="font-bold">{query}</span>
            </HorizontalWrapper>
          )}

          <ul className={clsx('flex flex-col mt-5', dividerStyles)}>
            {Array.from(query ? searchedData : tags).map(([key, value]) => {
              const isActive = activeTabs.sidebar == value.name;
              return (
                <li
                  key={key}
                  role="button"
                  tabIndex={0}
                  className={clsx(
                    'flex justify-between py-4 px-3 cursor-pointer rounded-xl',
                    { 'bg-primary-50': isActive },
                    listItemStyles,
                  )}
                  onKeyDown={e => {
                    if (e.key === 'Enter') {
                      handleClick({
                        path: `/${TAGS_URL}/${value.name}`,
                        headerText: `Showing result for ${value.name}`,
                        footerActiveTab: 'Tags',
                        settingActiveTab: '',
                        sidebarActiveTab: value.name,
                      });
                      // setHeaderText(`Showing result for ${value.name}`);
                      // setActiveTab("sidebar", value.name);
                      // navigate(`/${TAGS_URL}/${value.name}`);
                    }
                  }}
                  onClick={() =>
                    handleClick({
                      path: `/${TAGS_URL}/${value.name}`,
                      headerText: `Showing result for ${value.name}`,
                      footerActiveTab: 'Tags',
                      settingActiveTab: '',
                      sidebarActiveTab: value.name,
                    })
                  }
                >
                  <span
                    className={clsx('hover:text-primary-500/80', {
                      'font-semibold': isActive,
                    })}
                  >
                    <TagIcon
                      className={clsx('inline mr-2', {
                        'text-primary-500': isActive,
                      })}
                    />
                    {value.name}
                  </span>
                  <span> {isActive && <ChevRonRight size={20} />}</span>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </section>
  );
}

export default Tags;
