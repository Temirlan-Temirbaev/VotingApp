import styles from "../styles/Home.module.css";
import {ConnectWallet, useContract, useContractRead, useContractWrite} from "@thirdweb-dev/react";
import {ADDRESS} from "../address";
import {ABI} from "../abi";
import {useState} from "react";
import {toast} from "react-toastify";
import {Candidate} from "../components/Candidate";



export default function Home() {

  const {contract} = useContract(ADDRESS, ABI);

  const {data} = useContractRead(contract, "getCandidates");

  const [nameAddress, setNameAddress] = useState("");
  const [name, setName] = useState("");


  const candidateNameQuery = useContractRead(contract, "getNameOfCandidate", [nameAddress])

  const registrate = useContractWrite(contract, "registrate")

  const candidateName = candidateNameQuery.data;

  const registrateMutation = registrate.mutateAsync;

  return (
    <main className={styles.main}>
      <ConnectWallet style={{margin : "30px"}} />
      <div className={styles.container}>
        <div className={styles.candidateName}>
          <input placeholder={"Введите адрес"} value={nameAddress} onChange={e => setNameAddress(e.target.value)}/>
          <button onClick={() => candidateNameQuery.refetch()}>Найти имя кандидата</button>
          <p>
            {candidateName}
          </p>
        </div>
        <div className={styles.registrate}>
          <input value={name} onChange={e => setName(e.target.value)} placeholder={"Введите свое имя"} />
          <button onClick={() => {
            registrateMutation({args : [name]}).finally(() => {
              toast.success("Вы успешно зарегистрировались")
            })
          }}>Зарегистрироваться как кандидат</button>
        </div>
        <div className={styles.candidates}>
          {data?.map((candidate) => {
            return <Candidate
              contract={contract}
              key={candidate.candidate_address}
              name={candidate.candidate_name}
              address={candidate.candidate_address}
              votesCount={candidate.votes_count._hex} />
          })}
        </div>
      </div>
    </main>
  );
}
