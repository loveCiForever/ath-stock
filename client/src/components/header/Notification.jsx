import EmailUnRead from '../../assets/icon/emailUnRead.png'

const Notification = () => {
    return (
        <button
        className="p-2 hover:rounded-full hover:bg-orange-300  active:scale-[.90] active:duration-75 transition-all"
        onClick={() => {
          // toggleNotiDropdown();
          console.log("Notification button clicked");
        }}
      >
        <img
          src={EmailUnRead}
          className="w-6 opacity-100"
          alt="Notification" />
      </button>
    );
}

export default Notification;