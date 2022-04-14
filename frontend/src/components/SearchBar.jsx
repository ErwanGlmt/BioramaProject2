import React from 'react';

const SearchBar = ()=> {
    return (
        <div>
            <form>
                <label for="choice">Recherche par catégorie</label>
                <select name="choice" id="choixCategorie" required >
                    <option value="">--Choisissez une catégorie--</option>
                    <option value="detaillant">Détaillants</option>
                    <option value="grossiste">Grossiste</option>
                    <option value="restoCafe">Restaurant / Cafés</option>
                    <option value="gdDistribution">Grande Distribution</option>
                    <option value="commercants">Commerçants / Artisans</option>
                </select>
                <input type="text" minlength="4" maxlength="15" required placeholder="Ville, un acteur ..." />
                <input type="submit" />
            </form>
        </div>
    );
}

export default SearchBar;