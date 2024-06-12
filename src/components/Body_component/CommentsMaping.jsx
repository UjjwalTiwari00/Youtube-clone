import React from "react";
import Comments from "./Comments";

function CommentsMaping({ datas }) {
  return datas.map((c) =>(
    <div>
      <Comments data={c} />
      <div className="pl-5 border border-l-black ml-2">
        <CommentsMaping datas={c.reply}/>
      </div>
    </div>
  ));
}

export default CommentsMaping;
