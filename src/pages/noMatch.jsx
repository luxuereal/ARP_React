const NoMatch = () => {
  // return (
  //   <button
  //     type="button"
  //     className="btn btn-primary"
  //     onClick={() => {
  //       throw Error("Ooops!!! Sentry Test Error");
  //     }}
  //   >
  //     Send error message to Sentry
  //   </button>
  // );
  throw Error("Page Not Found Error");
};

export default NoMatch;
