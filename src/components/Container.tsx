const Container = (props: { children: any; title: string }) => (
  <div className="w-full h-[100vh] flex flex-col items-center justify-center">
    <div className="p-4 shadow-lg">
      <div className="text-brand-blue-primary text-lg mb-2">{props.title}</div>
      {props.children}
    </div>
  </div>
)
export default Container
