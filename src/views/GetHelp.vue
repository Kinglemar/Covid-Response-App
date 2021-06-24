<template>
    <div class="input-layout hide">

        <h2>Please provide details required below</h2>

        <div class="input-space">

            <h3>Electronic Form</h3>

        <form  @submit.prevent="processSubmit" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">

            <p class="hidden" style="display:none">
                <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
            </p>

            <div class="wrapper">
                <div class="form-group" :class="{ 'form-group--errors': $v.fullName.$error}">
                    <p>
                        Full Name
                    </p>
                    <input v-model.trim="$v.fullName.$model" v-model="form.fullName" class="name" type="text" name="name" id="" required>
                    <div class="errors" v-if="!$v.fullName.required  && $v.fullName.$dirty">Please enter your name</div>
                    <div class="errors" v-if="!$v.fullName.minLength">Name must be at least 3 characters</div>
                </div>
            </div>

            <div class="wrapper">
                <div class="form-group" :class="{ 'form-group--errors': $v.age.$error}">
                    <p>
                        Phone Number
                    </p>
                    <input v-model.trim="$v.number.$model" v-model="form.number" class="numb" placeholder="+23480000000" type="" name="number" id="" required>
                    <div class="errors" v-if="!$v.number.required && $v.number.$dirty">Please enter your phone number</div>
                    <div class="errors" v-if="!$v.number.minLength">Phone number must be at least 11 digits</div>
                </div>
            </div>

            <div class="wrapper">
                <div class="form-group" :class="{ 'form-group--errors': $v.age.$error}">
                    <p>
                        Age
                    </p>
                    <input v-model.number="$v.age.$model" v-model="form.age" class="age" min="0" value="16" type="" name="age" id="" required>

                    <div class="errors" v-if="!$v.age.required && $v.age.$dirty">Please enter your age</div>
                    <div class="errors" v-if="!$v.age.between">Age must be between {{$v.age.$params.between.min}} and {{$v.age.$params.between.max}}</div>
                </div>
            </div>

            <div class="wrapper">
                <div class="form-group" :class="{ 'form-group--errors': $v.state.$error}">
                    <p>
                        State
                    </p>
                    <select v-model.trim="$v.state.$model" v-model="form.state" class="state"  type="" name="state[]" id="" required>
                        <option value="Abia">Abia</option>
                        <option value="Adamawa">Adamawa</option>
                        <option value="Akwa Ibom">Akwa Ibom</option>
                        <option value="Anambra">Anambra</option>
                        <option value="Bauchi">Bauchi</option>
                        <option value="Bayelsa">Bayelsa</option>
                        <option value="Benue">Benue</option>
                        <option value="Borno">Borno</option>
                        <option value="Cross River">Cross River</option>
                        <option value="Delta">Delta</option>
                        <option value="Ebonyi">Ebonyi</option>
                        <option value="Edo">Edo</option>

                        <option value="Ekiti">Ekiti</option>
                        <option value="Enugu">Enugu</option>
                        <option value="Gombe">Gombe</option>
                        <option value="Imo">Imo</option>
                        <option value="Jigawa">Jigawa</option>
                        <option value="Kaduna">Kaduna</option>
                        <option value="Kano">Kano</option>
                        <option value="Katsina">Katsina</option>
                        <option value="Kebbi">Kebbi</option>
                        <option value="Kogi">Kogi</option>
                        <option value="Kwara">Kwara</option>
                        <option value="Lagos">Lagos</option>

                        <option value="Nassarawa">Nassarawa</option>
                        <option value="Niger">Niger</option>
                        <option value="Ogun">Ogun</option>
                        <option value="Ondo">Ondo</option>
                        <option value="Osun">Osun</option>
                        <option value="Oyo">Oyo</option>
                        <option value="Plateau">Plateau</option>
                        <option value="Rivers">Rivers</option>
                        <option value="Sokoto">Sokoto</option>
                        <option value="Taraba">Taraba</option>
                        <option value="Yobe">Yobe</option>
                        <option value="Zamfara">Zamfara</option>
                        <option value="F.C.T">F.C.T</option>
                    </select>

                    <div class="errors" v-if="!$v.state.required && $v.state.$dirty">Please enter your state of residence</div>
                </div>
            </div>

            <div class="wrapper">
                <div class="form-group" :class="{ 'form-group--errors': $v.address.$error}">
                    <p>
                        Address
                    </p>
                    <input v-model.trim="$v.address.$model" v-model="form.address" class="address" placeholder="" type="text" name="address" id="" required>
                    <div class="errors" v-if="!$v.address.required && $v.address.$dirty">Please enter your address</div>
                    <div class="errors" v-if="!$v.address.minLength">Enter a valid address</div>

                </div>
            </div>

            <div class="wrapper">
                <div class="form-group" :class="{ 'form-group--errors': $v.address.$error}">
                    <p>
                        Number of days experiencing symptoms
                    </p>
                    <input v-model.number="$v.days.$model" v-model="form.days" class="days" min="0" type="text" name="days" id="">
                    <div class="errors" v-if="!$v.days.required && $v.days.$dirty">Please enter number of days you've been experiencing the symptoms</div>
                    <div class="errors" v-if="!$v.days.between">Enter a valid number of days between {{$v.days.$params.between.min}} and {{$v.days.$params.between.max}}</div>
                </div>
            </div>

            <div class="checkbox-wrapper">
                <div class="form-group" :class="{ 'form-group--errors': $v.checked.$error}">
                    <input v-model="$v.checked.$model" value="false" class="checked" type="checkbox" name="check" id="" required><span>Are you sure of the details provided?</span>
                    <div class="errors" v-if="!$v.checked.required && $v.checked.$dirty">Please acknowlegde the details provided</div>
                </div>
            </div>
            <button type="submit" id="">Submit</button>

            
        </form>

        </div>
    </div>
</template>

<script>
    import { required, minLength, between} from "vuelidate/lib/validators"
    import axios from "axios"

    export default{
        name: 'GetHelp',
        props: {

        },

    data(){
        return({
            form:{
                fullName: '',
                number: '',
                age: '',
                state: '',
                address: '',
                days: '',
            },

            fullName: '',
                number: '',
                age: '',
                state: '',
                address: '',
                days: '',
                checked: '',
                
                
                link: null,

                enteredDetails: [],

                tempDetails:{ 
                    name: "",
                    number: "",
                    age: "",
                    state: "",
                    address: "",
                    days: "",
                    status: "",
                            
                },
                
            })
    },
    
    //****************************end of data***************************************

    validations:{

        fullName: {
            minLength: minLength(3),
            required,
        },

        number:{
            minLength: minLength(11 , 13),
            required
        },

        age:{
            required,
            between: between(5 , 100)
        },

        state: {
            required
        },

        address: {
            required,
            minLength: minLength(3)
        },

        days: {
            required,
            between: between(1 , 15)
        },

        checked: {
            required
        }
    },

//*************************end of validations*********************************8

    methods: {

        encode (data) {
        return Object.keys(data)
        .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },

        processSubmit(e){
            this.$v.$touch();
            e.preventDefault()

                if(this.$v.$invalid){
                    this.status = "Error! Please check form and try again"
                }

            else{

                this.link = "Success"

                if(this.link){
                this.$router.push('/thanks');
                }


        const axiosConfig = {
            header: { "Content-Type": "application/x-www-form-urlencoded" }
            };

            axios.post(
            "/",
            this.encode({
            "form-name": "conatct",
            ...this.form
            }),
            axiosConfig
        );

                this.tempDetails = { 
                name: this.form.fullName,
                number: this.form.number,
                age: this.form.age,
                state: this.form.state,
                address: this.form.address,
                days: this.form.days
                },

                this.enteredDetails.push(this.tempDetails);
                console.warn(this.enteredDetails)
                }
                
            

        },
        }
        
    // end of methods

} //end of default
</script>

<style scoped>

/* .hide{
    display: none;
} */
form p{
    margin: .5rem 0;
}

h3{
    margin: 0;
    margin-bottom: 1rem;
    padding: 1rem;
    border: 1px #a7c957 solid;
}

input{
    width: 18rem;
    height: 2.2rem;
    margin: .5rem;
    border-radius: 4px;
    border: 1px #52b788 solid;
    padding: 0 2rem;
    color: #33415c;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    outline: none;
}

button{
    margin-top: 1.7rem;
    width: 12rem;
    height: 3rem;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    color: #2c3e50;
    font-weight: 700;
    cursor: pointer;
    font-size: 1rem;
    outline: none;
    border:none;
    border-radius: 4px;
    background-color: #dcdcdd;
  }

  button:hover{
    background-color: #80ed99;
  }

a{
    text-decoration: none;
    color: #2c3e50;
  }

select{
    outline: none;
    height: 2.2rem;
    font-family: 'Poppins', sans-serif;
    margin: .5rem;
    border-radius: 4px;
    border: 1px #52b788 solid;
    width: 10rem;
    padding: 0 1rem;
    color: #33415c;
    font-size: 1rem;
    text-align: center;
}

  #nav a.router-link-exact-active {
  text-decoration: none;
  color: #2c3e50;
}

.errors{
    font-size: .8rem;
    color: #f94144;
}

.input-space{
    padding: 2rem;
    border: 1px #a7c957 solid;
    border-radius: 4px;
    max-width: 23rem;
    margin: 3rem auto;
}

.name{
    text-align: center;
}

.age{
    width: 6rem;
    text-align: center;
}

.numb{
    width: 12rem;
    text-align: center;
}

.days{
    width: 6rem;
    text-align: center;
}

.wrapper{
    border-bottom: 1px #a7c957 solid;
    padding-bottom: .5rem;
}

/* input:required + span:after {
  content: "Required";
  color: #f94144;
} */

.checked{
    width: 1rem;
    height: 1rem;
}

.checkbox-wrapper{
    justify-content: center;
    align-items: center;
    margin-top: .5rem;
    display: flex;
}

span{
    font-size: .7rem;
    color: #f94144;
}

@media screen and (max-width:498px){
    .name{
        width: 12rem;
        padding: 1rem;
    }
    .address{
        width: 12rem;
        padding: 1rem;
    }

    .numb{
        width: 10rem;
        padding: 1rem;
    }

    .input-space{
    padding: 2rem;
    border: 1px #a7c957 solid;
    border-radius: 4px;
    max-width: 17rem;
    margin: 2rem auto;
}

.form-group{
    margin-bottom: .5rem;
}

.wrapper{
    padding: 0;
}

span{
    font-size: .6rem;
    color: #f94144;
    text-align: left;
}


  h2{
    font-size: 1.2rem;
  }
  h3{
    font-size: 1rem;
  }

  p{
      font-size: .8rem;
  }

}
@media screen and (max-width:321px){
    .numb{
        width: 10rem;
        padding: 1rem;
    }

    .name{
        padding: 1rem;
    }

    .address{
        padding: 1rem;
    }
}
</style>