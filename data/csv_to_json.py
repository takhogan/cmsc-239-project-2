import glob
import pandas as pd

if __name__ == '__main__':
    csvs = glob.glob('./*.csv')
    for csv_name in csvs:

        df = pd.read_csv(csv_name)
        csv_name = csv_name.split('/')[1].split('.')[0]
        df.to_json(csv_name + '.json')