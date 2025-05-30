import { Input } from "@/components/ui/input";


function InputField({ item,handleInputChange }: { item: { name: string , fieldType: string , required: boolean} ;handleInputChange: (name: string, value: any) => void;}) {
  return (
    <div>
      <Input type={item.fieldType} 
      name={item.name} 
      required ={item.required} 
      className="focus-visible:ring-0 focus:outline-none focus:border focus:border-gray-400"
      onChange={(e)=>{
        handleInputChange(item.name,e.target.value);
      }}/>
    </div>
  );
}

export default InputField;
