import { useForm } from "react-hook-form";
import { z as zod } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { updateFlight } from "../../services/flightService";
import queryClient from "../../api/queryClient"


const schema = zod.object({
  fullName: zod.string().min(2, 'Please enter name'),
  email: zod.string().email("Invalid email"),
  phoneNumber: zod.string().optional(),
  confirmAgreement: zod.literal(true, {
    errorMap: () => ({ message: "You need to accept terms and conditions" }),
  }),
});

const BookingForm = ({flight}) => {
  const navigate = useNavigate()
  const { register,  handleSubmit, formState: {isValid, errors },} = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
        fullName: '',
        email: '',
        phoneNumber: '',
        confirmAgreement: false
    },
    mode: 'onBlur'
  })

  const mutation = useMutation({
      mutationFn: () => updateFlight(flight.id, {availableSeats: flight.availableSeats-1}),
      onSuccess: () => {
        queryClient.invalidateQueries({ tags: ['flights'] });
        navigate(`/`)
      },
  })

  const onSubmit = (data) => {
    console.log(data)
    mutation.mutate(data)  
  }

  if (+flight.availableSeats <= 0) {
    return <Error message={`No seats available for this flight`} />
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="min-w-sm flex-grow mt-6 p-6 bg-white shadow-md rounded-lg space-y-4">
      <h2 className="text-xl font-semibold mb-2">Book a flight</h2>
      <div>
        <label className="block font-medium">Full name</label>
        <input
          type="text"
          {...register("fullName")}
          className="w-full mt-1 border rounded p-2"
        />
        {errors.fullName && (
          <p className="text-red-600 text-sm">{errors.fullName.message}</p>
        )}
      </div>
      <div>
        <label className="block font-medium">Email</label>
        <input
          type="email"
          {...register("email")}
          className="w-full mt-1 border rounded p-2"
        />
        {errors.email && (
          <p className="text-red-600 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label className="block font-medium">Phone (optional)</label>
        <input
          type="tel"
          {...register("phoneNumber")}
          className="w-full mt-1 border rounded p-2"
        />
      </div>
      <div className="flex items-start gap-2">
        <input type="checkbox" className="mt-0.5 w-5 h-5" {...register("confirmAgreement")} />
        <label>I accept terms and conditions</label>
      </div>
      {errors.confirmAgreement && (
        <p className="text-red-600 text-sm">{errors.confirmAgreement.message}</p>
      )}
      <button
        type="submit"
        disabled={!isValid}
        className={`w-full text-white p-2 rounded ${isValid ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer' : 'bg-gray-400 cursor-not-allowed'}`}> 
            Book
        </button>
    </form>
  );
};

export default BookingForm;
