from flask import flask, render_template
import pickle
app = Flask(__name__)


@app.route("/")
def home():

    return render_template("home.html")
    pickle.dump(model)


if __name__ == "__main__":
    app.run(debug=True)
