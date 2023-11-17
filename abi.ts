export const ABI = [
  {
    "inputs": [],
    "name": "getCandidates",
    "outputs": [{
      "components":
        [{"internalType": "address", "name": "candidate_address", "type": "address"}, {
          "internalType": "string",
          "name": "candidate_name",
          "type": "string"
        }, {"internalType": "uint256", "name": "votes_count", "type": "uint256"}],
      "internalType": "struct LessonHomeTask.Candidate[]",
      "name": "",
      "type": "tuple[]"
    }], "stateMutability": "view", "type": "function"
  }, {
    "inputs": [{"internalType": "address", "name": "candidate", "type": "address"}],
    "name": "getNameOfCandidate",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{"internalType": "string", "name": "name", "type": "string"}],
    "name": "registrate",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{"internalType": "address", "name": "candidate", "type": "address"}],
    "name": "vote",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }]