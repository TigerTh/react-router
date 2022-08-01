const Urls = ['LMS', 'Cloud', 'Live'];
const Accordion = () => {
  const urlRender = () => {
    return Urls.map((url) => {
      <div key={url}> url</div>;
    });
  };

  return <div>{urlRender()}</div>;
};

export default Accordion;
