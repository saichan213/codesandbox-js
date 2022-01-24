import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncomplete = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに指定の要素を追加する
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //li生成
  const li = document.createElement("li");
  li.innerText = text;

  //完了ボタンの作成
  const completeBottun = document.createElement("button");
  completeBottun.innerText = "完了";
  completeBottun.addEventListener("click", () => {
    //完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncomplete(completeBottun.parentNode);
    //完了のリストに追加
    const addTarget = completeBottun.parentNode;
    //TODO内容のテキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //li生成
    const li = document.createElement("li");
    li.innerText = text;

    //戻すボタンの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    backButton.addEventListener("click", () => {
      //戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキストの取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了のリストに追加
    document.getElementById("complete-list").appendChild(div);
  });

  //削除ボタンの作成
  const deleteBottun = document.createElement("button");
  deleteBottun.innerText = "削除";
  deleteBottun.addEventListener("click", () => {
    //削除ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget = deleteBottun.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  //divに書く要素を配置する
  div.appendChild(li);
  div.appendChild(completeBottun);
  div.appendChild(deleteBottun);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
