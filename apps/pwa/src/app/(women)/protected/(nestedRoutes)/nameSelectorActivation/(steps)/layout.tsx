const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full h-fit min-h-[100dvh] bg-gradient-to-bl from-[#FF857088] to-[#F9504A22]">
      <>{children}</>
    </div>
  );
};

export default Layout;
