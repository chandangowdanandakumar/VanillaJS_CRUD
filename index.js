console.log('index.js')
const addContactBtn = document.getElementById('addContactBtn')
const contactDetails = document.getElementById('contactDetails')
const fullnameInput = document.getElementById("fullname")

const submitBtn = document.getElementById('submitBtn')



if (addContactBtn){
    var contactsCount = 1
    addContactBtn.addEventListener('click',(event)=>{
        contactsCount+=1
        if(contactsCount <= 6){
            var clone = contactDetails.cloneNode(true);
            clone.id = 'contactDetails';
            debugger
            contactDetails.after(clone);
        }
        else{
            addContactBtn.remove()
            alert("you are only allowed to add 6 contacts ")
        }
        console.log(contactsCount)
    } )
}


if (submitBtn){
    submitBtn.addEventListener('click',(event)=>{
        var AllContactString = ""
        var count = 1
        Array.from(document.querySelectorAll('#contactDetails input')).forEach(element => {
            if(count%4==0){
                AllContactString += element.value.toString() + ";"
                count+=1
            }
            else{
                AllContactString += element.value.toString() + ","
                count+=1
            }
  
        });

  console.log(AllContactString)
    } )
}
