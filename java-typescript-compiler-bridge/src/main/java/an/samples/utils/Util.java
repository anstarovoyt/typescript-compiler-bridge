package an.samples.utils;

import an.samples.Main;
import com.google.common.io.CharStreams;
import org.junit.Assert;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;

public final class Util {
    public static void throwRuntime(Exception e) {
        throw new RuntimeException(e.getMessage(), e);
    }

    public static String toString(InputStream stream) {
        try (InputStreamReader inputStreamReader = new InputStreamReader(stream)) {
            return CharStreams.toString(inputStreamReader);
        } catch (IOException e) {
            throwRuntime(e);
        }

        return null;
    }

    @SuppressWarnings("unused")
    public static String readFileText(String path) {
        try (BufferedReader bufferedReader = Files.newBufferedReader(Paths.get(path))) {
            String readValue = CharStreams.toString(bufferedReader);
            return readValue;
        } catch (IOException e) {
            throwRuntime(e);
        }

        return null;
    }

    @SuppressWarnings("unused")
    public static void writeFile(String path, String content) {
        try {
            Files.write(Paths.get(path), content.getBytes());
        } catch (IOException e) {
            throwRuntime(e);
        }
    }

    @SuppressWarnings("unused")
    public static void log(String text) {
        System.out.println(text);
    }

    public static URI getFileUri(String path) {
        URL url = Main.class.getClassLoader().getResource(path);
        Assert.assertNotNull(url);

        try {
            return url.toURI();
        } catch (URISyntaxException e) {
            throwRuntime(e);
        }

        return null;
    }

    public static String getAbsoluteResourcePath(String path) {
        return Paths.get(getFileUri(path)).toAbsolutePath().toString();
    }
}

