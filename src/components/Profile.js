function Profile(props) {
    
    const {name, lastname} = props;

    return <>
            <div>
               <h1>Name: {name} {lastname} </h1>
             </div>
             <div>
                <p>I have a request, that I want to put forth.</p>
             </div>
           </>;
}

export default Profile;