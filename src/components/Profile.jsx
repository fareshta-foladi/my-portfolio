function Profile({ image, title, bio }) {
  return (
    <section className="profile">
      <img
        src={image}
        alt="Fareshta Foladi"
        className="profile-img"
        loading="lazy"
      />

      <div className="profile-content">
        <h2>{title}</h2>
        <p>{bio}</p>
      </div>
    </section>
  );
}

export default Profile;