import InputField from "./components/InputField";
import carDetails from "../Shared/carDetails.json";
import Selection from "./components/Selection"
import Header from "@/components/Header";
import TextArea from "./components/TextArea";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import featuresData from "./../Shared/features.json"
import { Button } from "@/components/ui/button";
import { useState } from "react";






function Addlisting() {
    const [formdata,setFormData] = useState([]);
    const handleInputChange = (name: string, value: any) => {
    setFormData((prevdata: any) => ({
    ...prevdata,
    [name]: value,
    }));
    console.log(formdata);
    };
  return (
    <div>
    <Header/>
    <div>
        <div className="px-10 md:px-20 my-10 ">
            <h1 className="font-bold text-xl">Add new Listing</h1>
            <form className="p-10 border rounded-xl mt-10">
                <div>
        
                   <h2 className="font-medium text-xl mb-10">Car Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {carDetails.carDetails.map((item, index) => {
                        return (
                        <div key={index}>
                            <label>{item?.label}{item.required === true && <span className="text-red-600">*</span>}</label>
                            {
                            (item.fieldType === 'text' || item.fieldType === 'number') && (
                            <InputField item={item} handleInputChange={handleInputChange}/>
                            )
                            
                            }
                            
                            {
                                (item.fieldType === 'textarea') && (
                                <div>
                                    <TextArea item={item}/>
                                </div>
                            )
                            }

                            {
                                (item.fieldType === 'select' && <Selection item={item} />)
                            }
                            
                        </div>
                        );
                    })}
                    </div>

                </div>
                <Separator className="my-6"/>
                <div>
                    <h2 className="font-medium text-xl my-6">Features</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                        {featuresData.features.map((item:{label:string},index:number)=>
                        {
                            return(
                                <div key={index} className="flex gap-2 items-center">
                                <Checkbox className="border-blue-500 focus:ring-0 focus:outline-none checked:bg-blue-500 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"/><h2>{item.label}</h2>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/*upload image*/}
                <div className="mt-5 flex justify-end" >
                    <Button >Submit</Button>
                </div>
            </form>
        </div>
    </div>
    </div>
  );
}
export default Addlisting;