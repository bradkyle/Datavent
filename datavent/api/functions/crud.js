

// CRUD
// -------------------------------------------->

module.exports = {

    // List all documents
    list: function(db, collection) {
        db.collection(collection).get()
            .then((querySnapshot) => {
                const items = []
                querySnapshot.forEach((doc) => {
                    console.log(`${doc.id} => ${doc.data()}`);
                    items.push(doc.data())
                });
                return items
            });
    },

    // Create a new document
    create: function(db, collection, data){
        db.collection(collection).add(data)
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
    },

    // Read a document by id
    read: function(db, collection, doc){
        db.collection(collection).doc(doc).get()
            .then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                console.log("No such document!");
            }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
    },

    update: function(db, collection, doc, data) {
        var sfDocRef = db.collection(collection).doc(doc);
        return db.runTransaction(function(transaction) {
            return transaction.get(sfDocRef).then(function(sfDoc) {
                if (!sfDoc.exists) {
                    throw "Document does not exist!";
                }
                transaction.update(sfDocRef, data);
            });
        }).then(function() {
            console.log("Transaction successfully committed!");
        }).catch(function(error) {
            console.log("Transaction failed: ", error);
        });
    },

    remove: function(db, collection, doc) {
        db.collection(collection).doc(doc).delete().then(function() {
                console.log("Document successfully deleted!");
            }).catch(function(error) {
                console.error("Error removing document: ", error);
            });
    }

}