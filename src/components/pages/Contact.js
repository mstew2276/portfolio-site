import React from "react";
import "../../App.css";
import '../Contact.css';

export default function Contact() {

  return (
    <div className='body'>
    <div className="container mt-5">
        
      <form class="my-form" id="portfolio-form" action="" method="get">
        <h1 class="col">Contact Me!</h1>
        <ul>
            <li>
                <div class="grid col" >
                    <label for="name">Name:</label>
                    <input type="name" class="form-control" id="name" placeholder="Name" required/>
                    <label for="exampleInputEmail1">Email address:</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Email" required/>
                   

                </div>
            </li>

            <li>
                <div class="col">
                    <textarea placeholder="For any further comments/ specifics"></textarea>
                </div>
            </li>

        </ul>
        <button type="submit" class="btn btn-primary col" onclick="Submit()">Submit</button>
    </form>
    </div>
    </div>
  )
}
