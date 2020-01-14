package com.example.musicplayer;

import androidx.appcompat.app.AppCompatActivity;

import android.media.MediaPlayer;
import android.os.Bundle;
import android.provider.MediaStore;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    MediaPlayer mediaPlayer;


    public void onMusicOn(View view) {
        if (mediaPlayer==null)
            mediaPlayer = MediaPlayer.create(this, R.raw.a);
        mediaPlayer.start();
    }

    public void onMusicOn2(View view) {
        if (mediaPlayer==null)
            mediaPlayer = MediaPlayer.create(this, R.raw.b);
        mediaPlayer.start();
    }

    public void onMusicOn3(View view) {
        if (mediaPlayer==null)
            mediaPlayer = MediaPlayer.create(this, R.raw.c);
        mediaPlayer.start();
    }

    public void onMusicOn4(View view) {
        if (mediaPlayer==null)
            mediaPlayer = MediaPlayer.create(this, R.raw.d);
        mediaPlayer.start();
    }

    public void onMusicOn5(View view) {
        if (mediaPlayer==null)
            mediaPlayer = MediaPlayer.create(this, R.raw.e);
        mediaPlayer.start();
    }

    public void onMusicOn6(View view) {
        if (mediaPlayer==null)
            mediaPlayer = MediaPlayer.create(this, R.raw.f);
        mediaPlayer.start();
    }

    public void onMusicOn7(View view) {
        if (mediaPlayer==null)
            mediaPlayer = MediaPlayer.create(this, R.raw.g);
        mediaPlayer.start();
    }

    public void onMusicOn8(View view) {
        if (mediaPlayer==null)
            mediaPlayer = MediaPlayer.create(this, R.raw.h);
        mediaPlayer.start();
    }


    public void onMusicStop(View view) {
        mediaPlayer.stop();
        mediaPlayer=null;
    }
}
