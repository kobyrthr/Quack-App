import './index.css';
import BasicInfo from '../../Components/BasicInfo/index';
import Socials from '../../Components/Socials/index';
import UpdatePassword from '../../Components/UpdatePassword';

const EditProfilePage = () => {
    return (
    <>
    <BasicInfo />
    <Socials />
    <UpdatePassword />
    </>
    )
}

export default EditProfilePage;

// const EditProfilePage = () => {
//     return (
//         <div class="container">
//             <h5>Basic Info</h5>
//                 <div class="row">
//                     <div class="columns six">
//                         <label>First Name</label>
//                         <input 
//                                type="text"
//                                class="firstname" 
//                                placeholder="First Name">
//                         </input>
//                     </div>
     
//                     <div class="columns six">
//                         <label>Last Name</label>
//                         <input 
//                                type="text"
//                                class="lastname" 
//                                placeholder="Last Name">
//                         </input>
//                     </div>
//                 </div>
//                 <div class="row">
//                     <div class="columns six">
//                         <label>Title</label>
//                         <input     
//                             type="text"    
//                             class="user-title"
//                             placeholder="Title">
//                         </input>
//                     </div>
//                     <div class="columns six">
//                         <label>Place Of Employment</label>
//                         <input     
//                             type="text"    
//                             class="employment"
//                             placeholder="Place of Employment">
//                         </input>
//                     </div>
//                 </div>
//                 <div class="row">
//                     <div class="columns twelve">
//                         <label>Bio</label>
//                         <input 
//                             type="text"
//                             class="bio" 
//                             placeholder="Briefly about me...">
//                         </input>
//                     </div>

//                     </div>
//                     <br />
//                     <h5>Socials</h5>
//                 <div class="row">
//                     <div class="columns six">
//                         <label>LinkedIn</label>
//                         <input 
//                             type="text"
//                             class="linkedin" 
//                             placeholder="LinkedIn URL">
//                         </input>
//                         </div>
//                         <div class="columns six">
//                         <label>GitHub</label>
//                         <input 
//                                type="text"
//                                class="github" 
//                                placeholder="GitHub URL">
//                         </input>
//                         </div>
//                         </div>
//                         <div class="row">
//                         <div class="columns six">
//                         <label>Portfolio Site</label>
//                         <input     
//                             type="text"    
//                             class="portfolio-site"
//                             placeholder="Portfolio URL">
//                         </input>
//                         </div>
//                         <div class="columns six">
//                         <label>Other</label>
//                         <input     
//                             type="text"    
//                             class="other"
//                             placeholder="Other">
//                         </input>
//                         </div>
//                         </div>

//                     {/* <div class="row">
//                         <button class="button-primary">Sign Up</button>
//                         <button class="button-secondary">Log In</button>
//                     </div> */}


//                 <div class="row">
//                      <div class="columns six">
//                         <label>Twitter</label>
//                         <input     
//                             type="text"    
//                             class="twitter"
//                             placeholder="Twitter URL">
//                         </input>
//                     </div>
//                 </div>

//             <hr></hr>

//                 <div class="row">
//                     <div class="columns six">
//                         <h5>Reset Password</h5>
//                         <label>Current Password</label>
//                         <input
//                             type="password"    
//                             class="current-password"
//                             placeholder="Enter Current Password">
//                         </input>
//                     </div>
//                 </div>
//                 <div class="row">
//                     <div class="columns six">
//                         <label>New Password</label>
//                         <input
//                             type="password"    
//                             class="new-password"
//                             placeholder="Enter New Password">
//                         </input>
//                     </div>
//                     <div class="columns six">
//                         <label>Confirm New Password</label>
//                         <input
//                             type="password"    
//                             class="confirm-new-password"
//                             placeholder="Confirm New Password">
//                         </input>
//                     </div>
//                 </div>

//                 <br />

//                 <div class="row">
//                     <button class="button-secondary">Save Changes</button>
//                 </div>
//             <br />
//             <br />
//         </div>
//     )
// }

