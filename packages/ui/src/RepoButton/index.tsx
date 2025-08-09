const RepoButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { children, ...rest } = props;

  return (
    <button {...rest} className="bg-green-300 p-4">
      {children}
    </button>
  );
};

export default RepoButton;
