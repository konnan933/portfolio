import HeaderItem from "./HeaderItem";

function Header() {


  return (
    <>
      <div className='bg-side-light-color w-9/12 h-10 flex items-center justify-evenly m-4 rounded-3xl'>
            <img src="../../public/images/logo.png" width="100px" height="100px"/>
            .<HeaderItem name="Főoldal"/>
      </div>
    </>
  )
}

export default Header;
