package com.example.studentwsb.pogoda;

import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.w3c.dom.Text;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

public class MainActivity extends AppCompatActivity {
    EditText editText;
    TextView weatherTextView;


    public void getWeather(View view){
        DownloadTask task = new DownloadTask();
        task.execute("https://api.openweathermap.org/data/2.5/weather?q=" + editText.getText().toString() + "&appid=378445e92413373884f251e97d2a0195&lang=pl");
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        editText = findViewById(R.id.editText);
        weatherTextView = findViewById(R.id.weatherTextView);
    }

    public class DownloadTask extends AsyncTask<String, Void, String> {

        @Override
        protected String doInBackground(String... urls) {
            String json = "";
            URL url;
            HttpURLConnection urlConnection = null;

            try {
                url = new URL(urls[0]);
                urlConnection = (HttpURLConnection) url.openConnection();
                InputStream inputStream = urlConnection.getInputStream();
                InputStreamReader reader = new InputStreamReader(inputStream);
                int data = reader.read();
                while (data != -1){
                    char current = (char) data;
                    json += current;
                    data = reader.read();
                }
                return json;

            } catch (MalformedURLException e) {
                e.printStackTrace();
                return "Błąd";
            } catch (IOException e) {
                e.printStackTrace();
                return "Błąd";
            }
        }

        @Override
        protected void onPostExecute(String s) {
            super.onPostExecute(s);

            try {
                JSONObject jsonObject = new JSONObject(s);
                String weatherInfo = jsonObject.getString("weather");
                JSONArray array = new JSONArray(weatherInfo);
                String message = "";
                for (int i = 0; i < array.length(); i++){
                    JSONObject jsonPart = array.getJSONObject(i);
//                    Log.i("Main", jsonPart.getString("main"));
//                    Log.i("Description", jsonPart.getString("description"));
                    String main = jsonPart.getString("main");
                    String descripiton = jsonPart.getString("description");
                    if (!main.equals("") && !descripiton.equals("")){
                        message += main + ":" + descripiton + "\n";
                    }
                }
                weatherTextView.setText(message);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    }
}
