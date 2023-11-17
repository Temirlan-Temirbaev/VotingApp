import {useContractWrite} from "@thirdweb-dev/react";
import {toast} from "react-toastify";

export const Candidate = ({name, address, votesCount, contract}) => {

  const {mutateAsync} = useContractWrite(contract, "vote")

  return <div>
    <div>
      <p>{address}</p>
      <p>{name}</p>
      <p>{parseInt(votesCount, 16)}</p>
    </div>
    <button onClick={() => mutateAsync({args : [address]}).finally(() => {
      toast.success("Вы успешно проголосовалиы")
    })}>
      Проголосавать
    </button>
  </div>
}