const UserCircle = ({ user }) => {
  const getInitials = () => {
    if (user && user.username) {
      const usernameParts = user.username.split(" ");
      if (usernameParts.length >= 2) {
        return (
          usernameParts[0].charAt(0).toUpperCase() +
          usernameParts[1].charAt(0).toUpperCase()
        );
      } else {
        return user.username.charAt(0).toUpperCase();
      }
    }
    return "";
  };

  console.log(getInitials());

  return (
    <div className="user-circle">
      {user && user.picture ? (
        <img
          src={user.picture}
          alt="User"
          className="user-circle-image w-12 h-12 rounded-full"
          style={{ backgroundColor: `${user.picture}` }}
        />
      ) : (
        <div
          className={`user-circle-placeholder w-12 h-12 rounded-full flex items-center justify-center`}
          style={{ backgroundColor: `${user.profileColor}` }}
        >
          <span className="user-circle-initials text-white text-lg font-bold">
            {getInitials()}
          </span>
        </div>
      )}
    </div>
  );
};

export default UserCircle;
