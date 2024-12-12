import '../css/style.css';
import '../css/contact.css'

export default function Contact(){
    return (
        
      <div>        
        <form id="contact_form" action="" method="POST">
          
          <div class="row">
            <label class="required" for="name">Nombre:</label><br />
            <input id="name" class="input" name="name" type="text" value="" size="30" /><br />
          </div>

          <div class="row">
            <label class="required" for="email">Email:</label><br />
            <input id="email" class="input" name="email" type="text" value="" size="30" /><br />
          </div>

          <div class="row">
            <label class="required" for="message">Mensaje:</label><br />
            <textarea id="message" class="input" name="message" rows="7" cols="30"></textarea><br />
          </div>
            
            <input id="submit_button" type="submit" value="Send email" />
        </form>
      </div>


      
    );

}