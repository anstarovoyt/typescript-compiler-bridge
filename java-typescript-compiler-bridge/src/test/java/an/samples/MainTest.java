package an.samples;


import an.samples.utils.Util;
import org.junit.Assert;
import org.junit.Test;

import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;

public class MainTest {

    @Test
    public void testTryGetFile() throws URISyntaxException {

        Assert.assertTrue(Files.exists(Paths.get(getFileUri("ts-files/tsc.ts"))));
    }


    private URI getFileUri(String path) {
        URL url = Main.class.getClassLoader().getResource(path);
        Assert.assertNotNull(url);

        try {
            return url.toURI();
        } catch (URISyntaxException e) {
            Util.throwRuntime(e);
        }

        return null;
    }
}
