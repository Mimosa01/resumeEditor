import Editor from "./ui/templates/Editor"
import Previewer from "./ui/templates/Previewer"

function App() {

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-5 pb-10 bg-neutral-50">
      <Editor />
      <Previewer />
    </div>
  )
}

export default App
