// --- CASCADES ET POURCENTAGES ---
    {
        q: "La société M détient 60% de A, qui détient elle-même 40% de B. \n\n Quel est le POURCENTAGE D'INTÉRÊT de M dans B ?",
        r: "24 %",
        detail: "Le pourcentage d'intérêt se calcule en multipliant les taux : 0,60 x 0,40 = 0,24 (24%)."
    },
    {
        q: "M détient 60% de A (IG), qui détient 40% de B. M détient aussi 15% de B en direct. \n\n Quel est le POURCENTAGE DE CONTRÔLE de M sur B ?",
        r: "55 %",
        detail: "Le contrôle se calcule par l'addition des droits de vote : 40% (via A que l'on contrôle) + 15% (direct) = 55%."
    },

    // --- ÉCARTS D'ÉVALUATION ET JUSTE VALEUR ---
    {
        q: "À l'acquisition, un terrain vaut 100k€ en compta mais sa Juste Valeur est de 150k€. \n\n Comment traite-t-on l'écart de 50k€ ?",
        r: "Écart d'évaluation à l'actif",
        detail: "L'écart entre la valeur comptable et la juste valeur est inscrit à l'actif du bilan consolidé et génère un impôt différé."
    },
    {
        q: "Un écart d'évaluation est constaté sur une machine amortissable. \n\n Quel est l'impact sur le compte de résultat consolidé les années suivantes ?",
        r: "Supplément de dotation aux amortissements",
        detail: "L'écart d'évaluation doit être amorti au même rythme que le bien concerné."
    },

    // --- ACTIONS PROPRES ET ÉLIMINATIONS ---
    {
        q: "Une filiale consolidée en Intégration Globale détient des actions de la société mère M. \n\n Comment sont-elles présentées au bilan consolidé ?",
        r: "Déduction des Capitaux Propres",
        detail: "Les actions de la société consolidante détenues par des sociétés du groupe sont éliminées et traitées comme des actions propres (autocontrôle)."
    },

    // --- NORMES IFRS SPÉCIFIQUES (IFRS 3R) ---
    {
        q: "En normes IFRS, quelle option permet de comptabiliser 100% du Goodwill, même si on ne détient que 80% de la filiale ?",
        r: "Full Goodwill (Goodwill complet)",
        detail: "L'option du 'Full Goodwill' permet d'afficher la valeur totale de la filiale, incluant la part des minoritaires."
    },
    {
        q: "Comment sont traités les FRAIS DE RESTRUCTURATION prévus lors d'une acquisition en IFRS 3R ?",
        r: "Passés en charges (hors coût d'acquisition)",
        detail: "Les frais de restructuration ne peuvent pas être intégrés au Goodwill, ils doivent être constatés en résultat."
    },

    // --- VARIATION DE PÉRIMÈTRE ---
    {
        q: "M vend 10% de sa filiale F (détenue à 80%) mais conserve le contrôle exclusif. \n\n Comment enregistre-t-on l'impact en IFRS ?",
        r: "Ajustement des Capitaux Propres",
        detail: "Tant que le contrôle est conservé, les transactions sur les minoritaires sont traitées comme des transactions entre actionnaires (pas d'impact sur le résultat)."
    },
    {
        q: "Une filiale étrangère est consolidée. Ses actifs sont convertis au cours de clôture et ses charges au cours moyen. \n\n Où va l'écart ?",
        r: "Écart de conversion (Capitaux propres)",
        detail: "C'est la méthode du cours de clôture, l'écart de conversion ne transite pas par le résultat."
    }