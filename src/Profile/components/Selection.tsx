import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Selection({ item }: { item?: { label: string , options?: string[]} }) {
  if (!item) return null;

  return (
    <div className="border rounded-[10px]">
      <Select>
         <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg hover:scale-103 transition-all cursor-pointer">
          <SelectValue placeholder={item?.label}/>
        </SelectTrigger>
        <SelectContent className="bg-white">
           {item.options?.map((option, index) => (
            <SelectItem key={index} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default Selection;