// import React from 'react';
import { useNavigate } from 'react-router-dom';

import clsx from 'clsx';

import { AppIcons } from '../../../shared/icons/Icons';
import { useHeaderStore } from '../../notes/stores/headerStore';
import { TagsProps } from '../types';
import NoContent from '../../../shared/components/NoContent';
import { TAGS_URL } from '../../notes/constants/urls';
import { useTabStore } from '../../notes/stores/tabStore';
import { HorizontalWrapper, Input } from '../../../shared/components';
import { ChangeEvent, useState } from 'react';
import { ErrorFallback } from '../../../shared/components/ErrorFallback';
import { withErrorBoundary } from '../../../shared/components/WithErrorBoundary';
import { useTagStore } from '../stores/tagStore';
import { useSyncTags } from '../hooks/useSyncTags';

function Tags({ styles, divider, titleStyles, listItemStyles }: TagsProps) {
  const { isLoading, isError } = useSyncTags();
  const navigate = useNavigate();
  const { setHeaderText } = useHeaderStore();
  const { activeTabs, setActiveTab } = useTabStore();
  const tags = useTagStore(state => state.tagMap);
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

  const dividerStyles = clsx({
    'divide-y divide-secondary-dark': divider === 'vertical',
    'divide-x divide-secondary-dark': divider === 'horizontal',
  });

  if (isLoading) return <p>Loading tags...</p>;
  if (isError) return <p>Something went wrong while fetching tags.</p>;

  return (
    <section className={clsx('flex flex-col', styles)}>
      <h2 className={clsx('mb-5 text-neutral-500', titleStyles)}>Tags</h2>

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
              <span className="italic text-default">No results found for </span>
              <span className="font-bold text-default">{query}</span>
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
                    { 'bg-secondary-light': isActive },
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
                    className={clsx('text-secondary hover:text-primary', {
                      'font-semibold': isActive,
                    })}
                  >
                    <TagIcon
                      className={clsx('inline mr-2', {
                        'text-primary': isActive,
                      })}
                    />
                    {value.name}
                  </span>
                  <span>
                    {isActive && (
                      <ChevRonRight
                        className={clsx('text-default')}
                        size={20}
                      />
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </section>
  );
}

const TagsWithErrorBoundary = withErrorBoundary(Tags, {
  FallbackComponent: ErrorFallback,
});

Tags.WithErrorBoundary = TagsWithErrorBoundary;

export default Tags;
