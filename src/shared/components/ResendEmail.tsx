// import React, { useEffect, useState } from "react";
import { useCountdown } from "../hooks/useCountdown";

type ResendEmailProps = {
  email: string;
  callback: React.Dispatch<React.SetStateAction<boolean>>;
};

function ResendEmail({ email, callback }: ResendEmailProps) {
  // Use the custom hook for countdown logic
  const countDown = useCountdown(30, () => callback(true));

  return (
    <div className="text-center">
      <p className="mb-4">
        We sent a reset link to <b className="text-primary-500">{email}</b>.
        Please check your inbox and spam folder.
      </p>
      <p className="text-secondary-700">
        Didn't receive it? Click <b>Resend Email</b> to request another link in
        <span className="text-primary-500 font-bold"> {countDown}s</span>
      </p>
    </div>
  );
}

// function ResendEmail({ email, callback }: ResendEmailProps) {
//   const [countDown, setCountDown] = useState<number>(30);

//   useEffect(() => {
//     if (countDown > 0) {
//       const timerId = setInterval(
//         () => setCountDown((prevCount) => prevCount - 1),
//         1000
//       );
//       callback(false);
//       return () => clearInterval(timerId);
//     } else {
//       callback(true);
//     }
//   }, [countDown]);

//   return (
//     <div className="text-center">
//       <p className="mb-4">
//         We sent a reset link to <b className="text-primary-500">{email}</b>.
//         Please check your inbox and spam folder.
//       </p>
//       <p className="text-secondary-700">
//         Didn't receive it? Click <b>Resend Email</b> to request another link in
//         <span className="text-primary-500 font-bold">
//           {" "}
//           <span>{countDown}</span>s
//         </span>
//       </p>
//     </div>
//   );
// }

export default ResendEmail;
