/*
 * @Author: dushuai
 * @Date: 2024-03-29 17:33:13
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-29 17:37:23
 * @description: error page
 */
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
