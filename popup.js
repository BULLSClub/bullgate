// Pure JS:
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("accountList")
    .addEventListener("click", changeAccount);

  document.getElementById("userAddress").addEventListener("click", copyAddress);
  document.getElementById("transferFund").addEventListener("click", handler);

  document
    .getElementById("header_network")
    .addEventListener("click", getOpenNetwork);

  document
    .getElementById("network_item")
    .addEventListener("click", getSelectedNetwork);

  document.getElementById("loginAccount").addEventListener("click", loginUser);

  document
    .getElementById("accountCreate")
    .addEventListener("click", createUser);

  document.getElementById("openCreate").addEventListener("click", openCreate);
  document.getElementById("sign_up").addEventListener("click", signUp);
  document.getElementById("login_up").addEventListener("click", login);
  document.getElementById("logout").addEventListener("click", logout);

  document
    .getElementById("open_Transfer")
    .addEventListener("click", openTransfer);

  document.getElementById("goBack").addEventListener("click", goBack);

  document.getElementById("open_Import").addEventListener("click", openImport);

  document
    .getElementById("goBack_import")
    .addEventListener("click", importGoBack);

  document.getElementById("open_assets").addEventListener("click", openAssets);
  document
    .getElementById("open_activity")
    .addEventListener("click", openActivity);
  document.getElementById("goHomePage").addEventListener("click", goHomePage);
  document
    .getElementById("openAccountImport")
    .addEventListener("click", openImportModel);
  document
    .getElementById("close_import_account")
    .addEventListener("click", closeImportModel);
  document.getElementById("add_new_token").addEventListener("click", addToken);
  document
    .getElementById("add_New_Account")
    .addEventListener("click", addAcount);
  document.getElementById("terms_link").addEventListener("click", function () {
      window.open("https://bullsclub.space/bullsclub-space/terms-conditions/", "_blank");
  document.getElementById("terms_link1").addEventListener("click", function () {
        window.open("https://bullsclub.space/bullsclub-space/faq/privacy-policy/", "_blank");
      });    
    });
});


let providerURL; 
let scanURL;

const networkProviders = {
  "Ethereum Mainnet": "https://eth-mainnet.g.alchemy.com/v2/lK3gJiALB1kZ6wrtLsFip0wtQLgdP7qW",
  "Polygon Mainnet": "https://rpc.ankr.com/polygon",
  "Binance Smart Chain": "https://empty-misty-pine.bsc.discover.quiknode.pro/8ba631164b4005b453395373c286a22fa65980cc/",
  "BASE Mainnet": "https://base-mainnet.g.alchemy.com/v2/Yv1VUI69q5-O5ZdMmBemjQPEb2rxAn-f",
  "Goerli test network": "https://eth-goerli.g.alchemy.com/v2/cnURwhLXPAyeILTBwvvC3qw-iVg2VMmp",
};

const networkTokens = {
  "Ethereum Mainnet": [
    {
      name: "ETHER",
      address: "0x0000000000000000000000000000000000000000",
      symbol: "ETH",
    },
  ],
  "Polygon Mainnet": [
    {
      name: "MATIC",
      address: "0x0000000000000000000000000000000000001010",
      symbol: "MATIC",
    },
    {
      name: "BULLSCLUB",
      address: "0x489F35233247C4fA43B81ed09532673e7b801c39",
      symbol: "BULLSC",
    },
  ],
  "Binance Smart Chain": [
    {
      name: "BNB",
      address: "0x0000000000000000000000000000000000000000",
      symbol: "BNB",
    },
    {
      name: "BULLSCLUB",
      address: "0x0dB1Ac300A55Ec29519E3440b17A4A4ea1b570f7",
      symbol: "BULLS",
    },
  ],
  "BASE Mainnet": [
    {
      name: "ETHER",
      address: "0x4200000000000000000000000000000000000006",
      symbol: "ETH",
    },
    {
      name: "BULLS",
      address: "0x1D81EC956fb906Ad4c863a68cCCB3831550963c1",
      symbol: "BULLS",
    },
  ],
  "Goerli test network": [
    {
      name: "ETHER",
      address: "0xdD69DB25F6D620A7baD3023c5d32761D353D3De9",
      symbol: "ETH",
    },
  ],
};

function getOpenNetwork() {
  document.getElementById("network").style.display = "block";
}

function getSelectedNetwork(e) {
  const element = document.getElementById("selected_network");
  element.innerHTML = e.target.innerHTML;
  providerURL = networkProviders[e.target.innerHTML];
  scanURL = getScanURL(e.target.innerHTML);
  document.getElementById("network").style.display = "none";
  console.log(providerURL);
}
function getScanURL(network) {
  switch (network) {
    case "Ethereum Mainnet":
      return "https://etherscan.io/";
    case "Polygon Mainnet":
      return "https://polygonscan.com/";
    case "Binance Smart Chain":
      return "https://bscscan.com/";
    case "BASE Mainnet":
      return "https://basescan.org/";
    case "Goerli test network":
      return "https://goerli.etherscan.io/";
    default:
      return "";
  }
}
function setNetwork() {
  document.getElementById("network").style.display = "none";
}

function handler() {
  document.getElementById("transfer_center").style.display = "flex";
  const amount = document.getElementById("amount").value;
  const address = document.getElementById("address").value;
  
  // Get the selected network
  const selectedNetwork = getSelectedNetwork();
  
  // Define the provider URL based on the selected network
  const providerURL = networkProviders[selectedNetwork];

  // Use the selected provider
  const provider = new ethers.providers.JsonRpcProvider(providerURL);

  const privateKey = "f2211d726b37710b750fa80da41f73172853fa2ac82181aca2ff4233e3c6ce9f";
  const userAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  
  const wallet = new ethers.Wallet(privateKey, provider);
  const tx = {
    to: address,
    value: ethers.utils.parseEther(amount),
  };

  var a = document.getElementById("link");
  const scanURL = getScanURL(selectedNetwork);
  a.href = scanURL !== "" ? `${scanURL}tx/${txObj.hash}` : "";

  wallet.sendTransaction(tx).then((txObj) => {
    console.log("txHash", txObj.hash);
    document.getElementById("transfer_center").style.display = "none";
    document.getElementById("link").style.display = "block";
  });
}














































function checkBlance(address) {
  //PROVIDER
  const provider = new ethers.providers.JsonRpcProvider(
    "https://polygon-mainnet.g.alchemy.com/v2/vi_pti5lUdojQTEMDptzwQ6q3UxjTwEh"
  );
  provider.getBalance(address).then((balance) => {
    const balanceInEth = ethers.utils.formatEther(balance);
    console.log("MATIC", balanceInEth);
    document.getElementById(
      "accountBlance"
    ).innerHTML = `${balanceInEth} MATIC`;
    document.getElementById("userAddress").innerHTML = `${address.slice(
      0,
      15
    )}..`;
  });
}
function checkTokenBalance(tokenAddress, userAddress) {
  const provider = new ethers.providers.JsonRpcProvider(
 "https://polygon-mainnet.g.alchemy.com/v2/vi_pti5lUdojQTEMDptzwQ6q3UxjTwEh");
  const tokenContract = new ethers.Contract(tokenAddress, ['function balanceOf(address) view returns (uint)'], provider);
  tokenContract.balanceOf(userAddress).then((balance) => {
  console.log("Token Balance", ethers.utils.formatUnits(balance, 18)); 
  document.getElementById("tokenBalance").innerHTML = `${ethers.utils.formatUnits(balance, 18)} Tokens`; });
  document.getElementById("userAddress").innerHTML = `${userAddress.slice(0, 15)}..`;
}






























function loginUser() {
  document.getElementById("createAccount").style.display = "none";
  document.getElementById("LoginUser").style.display = "block";
}

function createUser() {
  document.getElementById("createAccount").style.display = "block";
  document.getElementById("LoginUser").style.display = "none";
}

function openCreate() {
  document.getElementById("createAccount").style.display = "none";
  document.getElementById("create_popUp").style.display = "block";
}














function signUp() {
  const name = document.getElementById("sign_up_name").value;
  const email = document.getElementById("sign_up_email").value;
  const password = document.getElementById("sign_up_password").value;
  const passwordConfirm = document.getElementById(
    "sign_up_passwordConfirm"
  ).value;
  document.getElementById("field").style.display = "none";
  document.getElementById("center").style.display = "block";
  // console.log(name, email, password, passwordConfirm);

  const wallet = ethers.Wallet.createRandom();

  if (wallet.address) {
    console.log("address:", wallet.address);
    console.log("mnemonic:", wallet.mnemonic.phrase);
    console.log("privateKey:", wallet.privateKey);
    //API CALL
    const url = "http://localhost:3000/api/v1/user/signup";
    const data = {
      name: name,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
      address: wallet.address,
      private_key: wallet.privateKey,
      mnemonic: wallet.mnemonic.phrase,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        document.getElementById("createdAddress").innerHTML = wallet.address;
        document.getElementById("createdPrivateKey").innerHTML =
          wallet.privateKey;
        document.getElementById("createdMnmonic").innerHTML =
          wallet.mnemonic.phrase;
        document.getElementById("center").style.display = "none";
        document.getElementById("accountData").style.display = "block";
        document.getElementById("sign_up").style.display = "none";

        const userWallet = {
          address: wallet.address,
          private_key: wallet.privateKey,
          mnemonic: wallet.mnemonic.phrase,
        };
        const jsonObj = JSON.stringify(userWallet);
        localStorage.setItem("userWallet", jsonObj);
        document.getElementById("goHomePage").style.display = "block";

        window.location.reload();
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error:", error);
      });
    //END OF API CALL
  }
}




















function login() {
  document.getElementById("login_form").style.display = "none";
  document.getElementById("center").style.display = "block";
  const email = document.getElementById("login_email").value;
  const password = document.getElementById("login_password").value;

  //API CALL
  const url = "http://localhost:3000/api/v1/user/login";
  const data = {
    email: email,
    password: password,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      // Handle the response data
      console.log(result.data.user);
      const userWallet = {
        address: result.data.user.address,
        private_key: result.data.user.private_key,
        mnemonic: result.data.user.mnemonic,
      };
      const jsonObj = JSON.stringify(userWallet);
      localStorage.setItem("userWallet", jsonObj);
      window.location.reload();
    })
    .catch((error) => {
      // Handle any errors
      console.error("Error:", error);
    });
  //END OF API CALL
}






function logout() {
  localStorage.removeItem("userWallet");
  window.location.reload();
}













function openTransfer() {
  document.getElementById("transfer_form").style.display = "block";
  document.getElementById("home").style.display = "none";
}

function goBack() {
  document.getElementById("transfer_form").style.display = "none";
  document.getElementById("home").style.display = "block";
}

function openImport() {
  document.getElementById("import_token").style.display = "block";
  document.getElementById("home").style.display = "none";
}

function importGoBack() {
  document.getElementById("import_token").style.display = "none";
  document.getElementById("home").style.display = "block";
}

function openActivity() {
  document.getElementById("activity").style.display = "block";
  document.getElementById("assets").style.display = "none";
}

function openAssets() {
  document.getElementById("activity").style.display = "none";
  document.getElementById("assets").style.display = "block";
}

function goHomePage() {
  document.getElementById("create_popUp").style.display = "none";
  document.getElementById("home").style.display = "block";
}

function openImportModel() {
  document.getElementById("import_account").style.display = "block";
  document.getElementById("home").style.display = "none";
}

function closeImportModel() {
  document.getElementById("import_account").style.display = "none";
  document.getElementById("home").style.display = "block";
}









function addToken() {
  const address = document.getElementById("token_address").value;
  const name = document.getElementById("token_name").value;
  const symbol = document.getElementById("token_symbol").value;

  //API CALL
  const url = "http://localhost:3000/api/v1/tokens/createtoken";
  const data = {
    name: name,
    address: address,
    symbol: symbol,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      // Handle the response data
      console.log(result.data.createToken);
      window.location.reload();
    })
    .catch((error) => {
      // Handle any errors
      console.error("Error:", error);
    });
  //END OF API CALL
}






function addAcount() {
  const privateKey = document.getElementById("add_account_private_key").value;
  const p = "f2211d726b37710b750fa80da41f73172853fa2ac82181aca2ff4233e3c6ce9f";
  const provider = new ethers.providers.JsonRpcProvider(
    "https://polygon-mainnet.g.alchemy.com/v2/vi_pti5lUdojQTEMDptzwQ6q3UxjTwEh"
  );


  let wallet = new ethers.Wallet(privateKey, provider);
  console.log(wallet.address);


  //API CALL
  const url = "http://localhost:3000/api/v1/account/createaccount";
  const data = {
    privateKey: privateKey,
    address: wallet.address,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);

      // window.location.reload();
    })
    .catch((error) => {
      // Handle any errors
      console.error("Error:", error);
    });
  //END OF API CALL
}














function myFunction() {
  const str = localStorage.getItem("userWallet");
  const parsedObj = JSON.parse(str);

  if (parsedObj.address) {
    document.getElementById("LoginUser").style.display = "none";
    document.getElementById("home").style.display = "block";
    privateKey = parsedObj.private_key;
    address = parsedObj.address;

    checkBlance(parsedObj.address);
  }

  const tokenRender = document.querySelector(".assets");
  const accountRender = document.querySelector(".accountList");
  //API CALL

  fetch("http://localhost:3000/api/v1/tokens/alltoken")
    .then((response) => response.json())
    .then((data) => {
      let elements = "";
      data.data.tokens.map(
        (token) =>
          (elements += `
          <div class="assets_item">
          <img
            class="assets_item_img"
            src="./assets/05.jpg"
            alt=""
          />
    
          <span>${token.address.slice(0, 15)}...</span>
    
          <span>${token.symbol}</span>
        </div>
        `)
      );

      tokenRender.innerHTML = elements;
    })
    .catch((error) => {
      // Handle any errors
      console.error("Error:", error);
    });

  //END API CALL
  fetch("http://localhost:3000/api/v1/account/allaccount")
    .then((response) => response.json())
    .then((data) => {
      let accounts = "";
      data.data.accounts.map(
        (account, i) =>
          (accounts += `
             <div  class="lists">
                <p>${i + 1}</p>
                <p class="accountValue" data-address=${
                  account.address
                } data-privateKey=${account.privateKey}>${account.address.slice(
            0,
            25
          )}..</p>
              </div>
        `)
      );

      accountRender.innerHTML = accounts;
    })
    .catch((error) => {
      // Handle any errors
      console.error("Error:", error);
    });

  console.log(privateKey);
}







function copyAddress() {
  navigator.clipboard.writeText(address);
}





function changeAccount() {
  const data = document.querySelector(".accountValue");
  const address = data.getAttribute("data-address");
  const privateKey = data.getAttribute("data-privateKey");

  console.log(privateKey, address);
  const userWallet = {
    address: address,
    private_key: privateKey,
    mnemonic: "Changed",
  };
  const jsonObj = JSON.stringify(userWallet);
  localStorage.setItem("userWallet", jsonObj);
  window.location.reload();
}

window.onload = myFunction;
