import { useForm } from "react-hook-form";
import { z as zod } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = zod
  .object({
    origin: zod.string().min(1),
    destination: zod.string().min(1),
    departureDate: zod.string().min(1),
  })
  .required();

const SearchForm = ({setFilter}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      origin: "",
      destination: "",
      departureDate: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    setFilter(data)
    reset()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-full rounded space-y-2">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:p-2">
            <div className="flex-1 min-w-full sm:min-w-auto">
                <input type="text" {...register("origin")} placeholder="Origin" className="w-full p-2 border rounded" />
                <div className="min-h-[2.5rem]">
                {
                    errors.origin && (<p className="text-red-500 text-sm">{errors.origin.message}</p>)
                }
                </div>
            </div>
            <div className="flex-1 min-w-full sm:min-w-auto">
                <input type="text" {...register("destination")} placeholder="Destination" className="w-full p-2 border rounded" />
                <div className="min-h-[2.5rem]">
                {
                    errors.destination && (<p className="text-red-500 text-sm">{errors.destination.message}</p>)
                }
                </div>
            </div>
            <div className="flex-1 min-w-full sm:min-w-auto">
                <input type="date" {...register("departureDate")} className="w-full p-2 border rounded" />
                <div className="min-h-[2.5rem]">
                {
                    errors.departureDate && (<p className="text-red-500 text-sm">{errors.departureDate.message}</p>)
                }
                </div>
            </div>
            <div className="flex-1 sm:mb-[2.5rem] min-w-full mb-1 sm:min-w-auto">
                <button className="px-5 py-2 bg-blue-600 hover:bg-blue-500 cursor-pointer text-white rounded-md min-w-full" type="submit">
                    Search
                </button>
            </div>
            <div className="flex-1 sm:mb-[2.5rem] min-w-full mb-1 sm:min-w-auto">
                <button onClick={() => setFilter(null)} className="px-5 py-2 bg-blue-600 hover:bg-blue-500 cursor-pointer text-white rounded-md min-w-full" type="button">
                    Reset
                </button>
            </div>
        </div>
    </form>
  )
};

export default SearchForm;
