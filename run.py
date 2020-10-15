from flask import Flask, render_template, g,  jsonify, request

import sqlite3


app = Flask(__name__)

DATADB = 'data.db'

@app.route('/')
def index():
    return render_template('index.html')
    db = sqlite3.connect(DATADB)
    print(db)

    colours = []
    cur = db.execute('SELECT id,colours FROM films')
    for row in cur:
        colours.append(list(row))

    db.close()

@app.route('/colourdata', methods=['GET'])
def colours_list():
    #return jsonify('data')

    con = sqlite3.connect(DATADB)
    numbers = []
    cur = con.execute('SELECT percentage FROM films')

    for row in cur:
        numbers.append(list(row))
    con.close()
    print(numbers)
    return (numbers)





# def colours_list():
#     con = sqlite3.connect(DATASDB)
#     colours = []
#     cur = con.execute('SELECT id, colours FROM films')
#
#     rows = cur.fetchall()
#
#     for row in rows:
#         print(row)
#         colours.append(list(row))
#     con.close()
#     return (colours)
#     print(colours)
