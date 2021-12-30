import React from "react";
import './cardEdit.css'

export const CardEdit = () => {
  return (
    <div>  
      <form action="" id="join-us">
        <div class="fields">
          <span>
            <input placeholder="Name" type="text"/>
          </span>
          <br />
          <span>
            <input placeholder="email" type="email"/>
          </span>
          <br />
          <span>
            <input placeholder="phone" type="text" />
          </span>
          <br />
          <span>
            <input placeholder="website" type="text" />
          </span>
        </div>
        <div class="submit">
          <input class="submit" value="Submit" type="button" />
        </div>
      </form>
    </div>
  );
};
