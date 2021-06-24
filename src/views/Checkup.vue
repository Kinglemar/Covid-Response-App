<template>

    <div class="checklist">
    <h1>Check-Up</h1>

    <h3><b>According to instructions from UNICEF</b></h3>
    
    <i class="fas fa-exclamation-triangle fa-4x"></i>
    <h3 class="red">Serious Symptoms</h3>

<p>Seek immediate medical attention if you have any of the following severe symptoms. Always call before visiting your doctor or health facility.</p>
<ul>
    <li>1. Difficulty breathing or shortness of breath </li>
    <li>2. Chest pain or pressure</li>
    <li>3. Loss of speech or movement</li>
</ul>



<p>If it is an emergency, please call <b>6232</b> toll free number. Please use this only for emergencies.</p>

<div class="mild">
    <i class="fas fa-clipboard fa-4x"></i>
    <h3 class="orange">COVID-19 Symptoms</h3>
    <p>Covid-19 affects different people in different ways most affected people will develop mild to moderate illness and recover without hospitalization.</p>
</div>

<h4>Most common symptoms:</h4>

<ul>
    <li>1. Fever</li>
    <li>2. Dry cough</li>
    <li>3. Tiredness</li>
</ul>


<h4>Less common symptoms:</h4>
<ul>
    <li>1. Aches and pains</li>
    <li>2. Sore throat</li>
    <li>3. Diarrhoea</li>
    <li>4. Conjunctivitis</li>
    <li>5. Headache</li>
    <li>6. Loss of taste or smell</li>
    <li>7. A rash on skin, or discolouration of fingers or toes.</li>
</ul>


<p>Seek immediate medical attention if you have serious symptoms. Always call before visiting your doctor or health facility.</p>

<p>People with mild symptoms who are otherwise healthy should manage their symptoms at home.</p>

<p>On average it takes 5-6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.</p>

</div>




</template>

<script>
export default{
    name: 'Checkup',
    props: {

    }
}
</script>

<style scoped>
ul,li{
    display: block;
    text-align: left;
    font-weight: 500;
}

h3,h2,h4,p{
    /* max-width: 800px; */
    text-align: left;
    margin: 0;
    padding: 1rem;
}

h1{
    text-align: center;
}


p{
    padding: 1rem;
    font-weight: 600;
}

i{
    text-align: left;
    color: #d90429;
    margin-left: 2rem;
}

b{
    color: green;
}

.red{
    color: #d90429;
}

.mild i{
    color: #f48c06;
}
.orange{
    color: #f48c06;
}

.checklist{
    padding: 2rem 3rem;
    text-align: left;
}


@media screen and (max-width:415px){
    h1{
        font-size: 1.5rem;
        margin-bottom: 0;
    }

    b,h3 {
        font-size: 1.1rem;
    }

    h4{
        font-size: 1.2rem;
    }

    .checklist i{
        font-size: 2rem;
        padding-left: 1rem;
    }

    .checklist{
    padding: 2rem 1rem;
    text-align: left;
}

i{
    text-align: left;
    color: #d90429;
    margin-left: 0rem;
}
}
</style>


