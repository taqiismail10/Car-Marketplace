import { Textarea } from "@/components/ui/textarea";

function TextArea({ item }: { item: { name: string } }) {
  return <Textarea name={item.name} className="focus-visible:ring-0 focus:outline-none focus:border focus:border-gray-400"/>;
}

export default TextArea;
