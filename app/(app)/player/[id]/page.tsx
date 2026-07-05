"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PlayerPage() {
  const params = useParams();
  const bookId = params.id;

  const [book, setBook] = useState<any>(null);

  useEffect(() => {
    async function fetchBook() {
      const res = await fetch(
        `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${bookId}`
      );

      const data = await res.json();
      setBook(data);
    }

    if (bookId) {
      fetchBook();
    }
  }, [bookId]);

  if (!book) {
    return <div>Loading...</div>;
  }

 return (
<div id="__next">
<div className="wrapper wrapper__full">
<div className="sidebar__overlay sidebar__overlay--hidden"></div>
<div className="summary">
<div className="audio__book--summary" style={{ fontSize: "16px" }}>
<div className="audio__book--summary-title">
    <b>The 5 Second Rule</b>
</div>
<div className="audio__book--summary-text">{book.summary}</div>
 <div className="audio__wrapper">
<audio src={book.audioLink}></audio>
<div className="audio__track--wrapper">
<figure className="audio__track--image-mask"></figure>
<figure className="book__image--wrapper" style={{ height: "48px", width: "48px", minWidth: "48px" }}>
    <img className="book__image" src={book.imageLink} alt={book.title} />
</figure>
<div className="audio__track--details-wrapper">
<div className="audio__track--title">{book.title}</div>
<div className="audio__track--author">{book.author}</div>
</div>
</div>
<div className="audio__controls--wrapper">
<div className="audio__controls">
<button className="audio__controls--btn" fdprocessedid="4l4x6t">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
<path fill="none" stroke="#000" strokeWidth="2" d="M3.11111111,7.55555556 C4.66955145,4.26701301 8.0700311,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 L12,22 C6.4771525,22 2,17.5228475 2,12 M2,4 L2,8 L6,8 M9,16 L9,9 L7,9.53333333 M17,12 C17,10 15.9999999,8.5 14.5,8.5 C13.0000001,8.5 12,10 12,12 C12,14 13,15.5000001 14.5,15.5 C16,15.4999999 17,14 17,12 Z M14.5,8.5 C16.9253741,8.5 17,11 17,12 C17,13 17,15.5 14.5,15.5 C12,15.5 12,13 12,12 C12,11 12.059,8.5 14.5,8.5 Z"></path>
</svg>
</button>
<button className="audio__controls--btn audio__controls--btn-play" fdprocessedid="qdziy9">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="audio__controls--play-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M96 448l320-192L96 64v384z"></path>
</svg>
</button>
<button className="audio__controls--btn" fdprocessedid="x10sv9">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
<path fill="none" stroke="#000" strokeWidth="2" d="M20.8888889,7.55555556 C19.3304485,4.26701301 15.9299689,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 L12,22 C17.5228475,22 22,17.5228475 22,12 M22,4 L2２,8 L18,8 M9,16 L9,9 L7,9.53333333 M17,1２ C17,１０ １５.９９９９９９９,８.５ １４.５,８.５ C１３.００００００１,８.５ １２,１０ １２,１２ C１２,１４ １３,１５.５０００００１ １４.５,１５.５ C１６,１５.４９９９９９９ １７,１４ １７,１２ Z M１４.５,８.５ C１６.９２５３７４１,８.５ １７,１１ １７,１２ C．７，１３ ．７，１５．５ ．５，１５．５ C．２，１５．５ ．２，１３ ．２，１２ C．２，１₁ ₁₂．₀₅₉，₈．₅ ₁₄．₅，₈．₅ Z"></path>
</svg>
</button>
</div>
</div>
<div className="audio__progress--wrapper">
<div className="audio__time">00:00</div>
<input type="range" className="audio__progress--bar" max="165.36" style={{ background: "linear-gradient(to right, rgb(43, 217, 124) 0%, rgb(109, 120, 125) 0%)", "--range-progress": "0%" }}/>
<div className="audio__time">02:45</div>
</div>
</div>
</div>
</div>
</div>
</div>

);

}
