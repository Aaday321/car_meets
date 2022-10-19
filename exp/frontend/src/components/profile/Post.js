


function Post(props){
    console.log(props.src);
    return(
        <div className="gallery-item" tabIndex="0">
            <img
              src={props.src}
              className="gallery-image"
              alt=""
            />

            <div className="gallery-item-info">
              <ul>
                <li className="gallery-item-likes">
                  <span className="visually-hidden">Likes:</span>
                  <i className="fas fa-heart" aria-hidden="true"></i> 56
                </li>
                <li className="gallery-item-comments">
                  <span className="visually-hidden">Comments:</span>
                  <i className="fas fa-comment" aria-hidden="true"></i> 2
                </li>
              </ul>
            </div>
          </div>
    )
}

export default Post;