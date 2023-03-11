import Heading from "./components/Heading";
import { Section } from "./components/Section";
import Counter from "./components/Counter";
import List from "./components/List";

function App() {
  return (
    <>
      <Heading title="hello from props" />
      <Section>This is the children element</Section>
      <Section title="Modified the default title">
        This is the children element
      </Section>
      <Counter />
      <List
        items={["☕ Coffee", "🌮 Tacos", "💻 Code"]}
        render={(item: string) => <span className="gold">{item}</span>}
      />
    </>
  );
}
export default App;
