import './index.css';

const EditProfilePage = () => {
    return (
        <div class="container">

            <div class="row">

                <div class="columns six">
                    
                        <h5>Basic Info</h5>
                        <label>First Name</label>
                        <input 
                               type="text"
                               class="firstname" 
                               placeholder="First Name">
                        </input>
                        <label>Title</label>
                        <input     
                            type="text"    
                            class="user-title"
                            placeholder="Title">
                        </input>
            </div>
            <div class="columns six">
                        <label>Last Name</label>
                        <input 
                               type="text"
                               class="lastname" 
                               placeholder="Last Name">
                        </input>
                        <label>Place Of Employment</label>
                        <input     
                            type="text"    
                            class="employment"
                            placeholder="Place of Employment">
                        </input>
                </div>

            </div>
            <div class="row">
                <div class="columns twelve">
                    <label>Bio</label>
                        <input 
                               type="text"
                               class="bio" 
                               placeholder="Briefly about me...">
                        </input>
                </div>
                <div clas="row">
                <div class="columns six">
                    
                    <h5>Socials</h5>
                    <label>LinkedIn</label>
                    <input 
                           type="text"
                           class="linkedin" 
                           placeholder="LinkedIn URL">
                    </input>
                    <label>Portfolio Site</label>
                    <input     
                        type="text"    
                        class="portfolio-site"
                        placeholder="Portfolio URL">
                    </input>
                    <label>Other</label>
                    <input     
                        type="text"    
                        class="other"
                        placeholder="Other">
                    </input>
                    <div class="row">
                    <button class="button-primary">Sign Up</button>
                          <button class="button-secondary">Log In</button>
                          </div>
        </div>


        <div class="columns six">
                        <label>GitHub</label>
                        <input 
                               type="text"
                               class="github" 
                               placeholder="GitHub URL">
                        </input>
                        <label>Twitter</label>
                        <input     
                            type="text"    
                            class="twitter"
                            placeholder="Twitter URL">
                        </input>
                </div>

                </div>

            </div>

        </div>
            
            
            
            
            
        //     {/* <div class="row">
        //                 <div class="columns six">
                            
        //                 <label>Last Name</label>
        //                     <input 
        //                         type="text"
        //                         class="lastname" 
        //                         placeholder="Last Name">
        //                     </input>
        //                     <label>Place Of Employment</label>
        //                     <input    
        //                         type="text"     
        //                         class="placeOfEmployemnt"                       
        //                         placeholder="Place of Employment"
        //                     ></input>


        //                 </div>
                    
        //                 <br />
        //                     <button class="button-primary signupbtn">Sign Up</button>
        //                     <button class="button-secondary loginbtn">Log In</button>
                    
        //         </div>

        //     </div>

        // </div> */}
    )
}

export default EditProfilePage;