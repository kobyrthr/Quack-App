import './index.css';

export default function BasicInfo() {
    return (
        <>
        <div class="container">
            <h5>Basic Info</h5>
                <div class="row">
                    <div class="columns six">
                        <label>First Name</label>
                        <input 
                               type="text"
                               class="firstname" 
                               placeholder="First Name">
                        </input>
                    </div>
     
                    <div class="columns six">
                        <label>Last Name</label>
                        <input 
                               type="text"
                               class="lastname" 
                               placeholder="Last Name">
                        </input>
                    </div>
                </div>
                <div class="row">
                    <div class="columns six">
                        <label>Title</label>
                        <input     
                            type="text"    
                            class="user-title"
                            placeholder="Title">
                        </input>
                    </div>
                    <div class="columns six">
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

                    </div>
                    </div>
     </>               
    )
}