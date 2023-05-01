import React from 'react'
import "../Styles/home.css"

function Home() {
  return (
    <div className="ques">
        {/* <Navbar login={true}/> */}
        <section class="container">
            <div class="accordion">
                <h2 class="title">Frequently Asked Questions</h2>
                <article class="accordion-panel">
                    <input id="accordion-question" name="accordion" type="radio" checked />
                    <label for="accordion-question">
                        How the Bills are stored?
                        <i class="ri-add-line open"></i>
                        <i class="ri-subtract-line close"></i>
                    </label>
                    <div class="accordion-body">
                        <p class="accordion-answer">
                        Smart contracts are executed on blockchain, which means that the terms are stored in a distributed database and cannot be changed. Transactions are also processed on the blockchain, which automates payments and counterparties.
                        </p>
                    </div>
                </article>
                <article class="accordion-panel">
                    <input id="accordion-question-2" name="accordion" type="radio" checked/>
                    <label for="accordion-question-2">
                    What information must I provide ?
                        <i class="ri-add-line open"></i>
                        <i class="ri-subtract-line close"></i>
                    </label>
                    <div class="accordion-body">
                        <p class="accordion-answer">
                        Reference of your metering point: PDL (delivery point) for electricity . These 14-figure numbers are the only identifiers of your electricity   that you produce. 
                        Also you need to give a few of your personal details and type of renewable energy used.
                        </p>
                    </div>
                </article>
                <article class="accordion-panel">
                    <input id="accordion-question-3" name="accordion" type="radio" checked />
                    <label for="accordion-question-3">
                    How do I see the output?
                        <i class="ri-add-line open"></i>
                        <i class="ri-subtract-line close"></i>
                    </label>
                    <div class="accordion-body">
                        <p class="accordion-answer">
                        Firstly you need a wallet track your Transactions.
                        The best option would be Metamask. If you don't have a metamask account then Go to MetaMask.io and click the “Download” button, which will take you to the relevant store to download the extension or app based on the device and browser you’re using.
                        </p>
                    </div>
                </article>
                <article class="accordion-panel">
                    <input id="accordion-question-4" name="accordion" type="radio" checked />
                    <label for="accordion-question-4">
                    Which Ai functionalities do we have?
                        <i class="ri-add-line open"></i>
                        <i class="ri-subtract-line close"></i>
                    </label>
                    <div class="accordion-body">
                        <p class="accordion-answer">
                           We have used open ocr in order to scan the bills provided to us.
                        </p>
                    </div>
                </article>
            </div>
        </section>
        {/* <Footer/> */}
    </div>
// )
// }

// export default Faq
    )
}

export default Home