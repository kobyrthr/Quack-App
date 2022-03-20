import './index.css';

export default function Socials() {
    return (
        <>
        <br />
        <h5>Socials</h5>
    <div class="row">
        <div class="columns six">
            <label>LinkedIn</label>
            <input 
                type="text"
                class="linkedin" 
                placeholder="LinkedIn URL">
            </input>
            </div>
            <div class="columns six">
            <label>GitHub</label>
            <input 
                   type="text"
                   class="github" 
                   placeholder="GitHub URL">
            </input>
            </div>
            </div>
            <div class="row">
            <div class="columns six">
            <label>Portfolio Site</label>
            <input     
                type="text"    
                class="portfolio-site"
                placeholder="Portfolio URL">
            </input>
            </div>
            <div class="columns six">
            <label>Other</label>
            <input     
                type="text"    
                class="other"
                placeholder="Other">
            </input>
            </div>
            </div>
            </>
    )
}