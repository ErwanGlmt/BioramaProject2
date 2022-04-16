import React from 'react';
import '../Search.css';

const SearchBar = ({categorie, setCategorie, setVille})=> {
    const handleChangeDept = (event)=> {
        setVille(event.target.value)
        //console.log(ville);
    }

    const handleChangeCat = (event)=> {
        setCategorie(event.target.value)
        console.log("ma categorie == " + categorie);
    }

    return (
        <div>
            <form>
                <div className="selectCat">
                    <label htmlFor="categorie" >Recherche par catégorie</label>
                    <select name="categorie" id="categorie" required onChange={(e)=> handleChangeCat(e)} >
                        <option value="">--Choisissez une catégorie--</option>
                        <option value='Grossistes'>Grossites</option>
                        <option value='Magasins spécialisés'>Magasins Spécialisés</option>
                        <option value='Vente aux consommateurs'>'{categorie}'</option>
                        <option value='Artisans/commerçants'>Artisans/commerçants</option>
                        <option value='restaurants'>Restaurants</option>
                    </select>
                </div>
                
                <div className="selectDept">   
                    <label htmlFor="choixDept" >Département</label>
                    <select name="choixDept" id="choixDept" required onChange={handleChangeDept} >
                        <option value="">--Département--</option>
                        <option value="loire">Loire-Atlantique</option>
                        <option value="mayenne">Mayenne</option>
                        <option value="idf">Ile-de-France</option>
                        <option value="vilaine">Ille-et-Vilaine</option>
                    </select>
                </div>

                <input type="text" minLength="4" maxLength="16" required placeholder="Ville de la recherche" />
                <input type="submit" />
            </form>
        </div>
    );
}

export default SearchBar;