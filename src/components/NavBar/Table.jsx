import React from 'react'

const Table = () => {
  return (
    <>
    <section className="bookTable">
        <h2 className='text-dark'>Book A Table</h2>
        <div className="form-map">
            <form action="">
                <input type="text" placeholder='Your Name' />
                <input type="text" placeholder='Phone Number' />
                <input type="emai" placeholder='Your Email' />
                <input type="date" placeholder='' />
                <select name="" id="">
                    <option value="">How Many Persons</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>                     
                </select>
                <button>Book Now</button>
            </form>
        </div>
    </section>
    </>
  )
}

export default Table