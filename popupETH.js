// Pure JS:
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("accountList") .addEventListener("click", changeAccount);
  document.getElementById("userAddress").addEventListener("click", copyAddress);
  document.getElementById("loginAccount").addEventListener("click", loginUser);
  document.getElementById("accountCreate").addEventListener("click", createUser);
  document.getElementById("openCreate").addEventListener("click", openCreate);
  document.getElementById("sign_up").addEventListener("click", signUp);
  document.getElementById("login_up").addEventListener("click", login);
  document.getElementById("logout").addEventListener("click", logout);


  document.getElementById("header_network").addEventListener("click", getOpenNetwork);
  document.getElementById("network_item").addEventListener("click", getSelectedNetwork);
  
   



  document.getElementById("open_Buy").addEventListener("click", function () {
    window.open("https://simpleswap.io/?ref=9ecd01582250", "_blank");
    });    
  document .getElementById("open_Transfer").addEventListener("click", openTransfer);
  document.getElementById("transferFund").addEventListener("click", handler);

  document.getElementById("goBack").addEventListener("click", goBack);
  document.getElementById("open_Import").addEventListener("click", openImport);
  document.getElementById("goBack_import").addEventListener("click", importGoBack);
  document.getElementById("open_assets").addEventListener("click", openAssets);
  document.getElementById("open_activity").addEventListener("click", openActivity);
  



  document.getElementById("open_nft").addEventListener("click", openNFT);

  document.getElementById("goHomePage").addEventListener("click", goHomePage);
  

  document.getElementById("openAccountImport") .addEventListener("click", openImportModel);
  document.getElementById("close_import_account") .addEventListener("click", closeImportModel);
  document.getElementById("add_new_token").addEventListener("click", addToken);
  document.getElementById("add_New_Account").addEventListener("click", addAcount);
  document.getElementById("terms_link").addEventListener("click", function () {
      window.open("https://bullsclub.space/bullsclub-space/terms-conditions/", "_blank");
  
      document.getElementById("terms_link1").addEventListener("click", function () {
        window.open("https://bullsclub.space/bullsclub-space/faq/privacy-policy/", "_blank");
      });    
    });
});










//ETH test //







